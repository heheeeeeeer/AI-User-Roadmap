import { roadmap } from "../data/roadmap.js";

type IntroSection = {
  title: string;
  paragraphs: string[];
};

type Resource = {
  label: string;
  url: string;
  note?: string;
};

type Group = {
  title: string;
  description?: string | string[];
  items?: string[];
  toolResources?: Resource[];
  resources?: Resource[];
};

type PanelParent = {
  id: string;
  title: string;
};

type ThemeColor = "gray" | "blue" | "green" | "amber" | "coral";

type Subtopic = {
  id: string;
  title: string;
  color?: ThemeColor;
  summary?: string;
  groups?: Group[];
};

type Stage = {
  id?: string;
  title: string;
  summary?: string;
  color?: ThemeColor;
  intro?: IntroSection[];
  groups?: Group[];
  subtopics?: Subtopic[];
};

const SAFE_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const THEME_COLORS = new Set<ThemeColor>(["gray", "blue", "green", "amber", "coral"]);

const assertNonEmptyText = (value: string | undefined, path: string) => {
  if (!value?.trim()) {
    throw new Error(`Roadmap data validation failed: ${path} must be a non-empty string.`);
  }
};

const assertSafeId = (value: string | undefined, path: string) => {
  if (!value) return;
  if (!SAFE_ID_PATTERN.test(value)) {
    throw new Error(
      `Roadmap data validation failed: ${path} must use lowercase letters, numbers, and hyphens only.`
    );
  }
};

const assertThemeColor = (value: ThemeColor | undefined, path: string) => {
  if (!value) return;
  if (!THEME_COLORS.has(value)) {
    throw new Error(`Roadmap data validation failed: ${path} has unsupported theme color "${value}".`);
  }
};

const assertHttpsUrl = (value: string, path: string) => {
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:") {
      throw new Error("Only HTTPS URLs are allowed.");
    }
  } catch (error) {
    const reason = error instanceof Error ? error.message : "Invalid URL.";
    throw new Error(`Roadmap data validation failed: ${path} must be a valid HTTPS URL. ${reason}`);
  }
};

const validateResources = (resources: Resource[] | undefined, path: string) => {
  resources?.forEach((resource, index) => {
    assertNonEmptyText(resource.label, `${path}[${index}].label`);
    assertHttpsUrl(resource.url, `${path}[${index}].url`);
  });
};

const validateGroups = (groups: Group[] | undefined, path: string) => {
  groups?.forEach((group, index) => {
    const groupPath = `${path}[${index}]`;
    assertNonEmptyText(group.title, `${groupPath}.title`);
    validateResources(group.toolResources, `${groupPath}.toolResources`);
    validateResources(group.resources, `${groupPath}.resources`);
  });
};

const validateRoadmapData = (stages: Stage[]) => {
  const ids = new Set<string>();

  stages.forEach((stage, index) => {
    const fallbackId = String(index);
    const stageId = stage.id || fallbackId;
    const stagePath = `stages[${index}]`;

    assertSafeId(stage.id, `${stagePath}.id`);
    assertNonEmptyText(stage.title, `${stagePath}.title`);
    assertThemeColor(stage.color, `${stagePath}.color`);

    if (ids.has(stageId)) {
      throw new Error(`Roadmap data validation failed: duplicate stage id "${stageId}".`);
    }
    ids.add(stageId);

    stage.intro?.forEach((section, sectionIndex) => {
      assertNonEmptyText(section.title, `${stagePath}.intro[${sectionIndex}].title`);
    });
    validateGroups(stage.groups, `${stagePath}.groups`);

    stage.subtopics?.forEach((subtopic, subtopicIndex) => {
      const subtopicPath = `${stagePath}.subtopics[${subtopicIndex}]`;

      assertSafeId(subtopic.id, `${subtopicPath}.id`);
      assertNonEmptyText(subtopic.title, `${subtopicPath}.title`);
      assertThemeColor(subtopic.color, `${subtopicPath}.color`);

      if (ids.has(subtopic.id)) {
        throw new Error(`Roadmap data validation failed: duplicate subtopic id "${subtopic.id}".`);
      }
      ids.add(subtopic.id);

      validateGroups(subtopic.groups, `${subtopicPath}.groups`);
    });
  });
};

validateRoadmapData(roadmap.stages as Stage[]);

const drawerStages = (roadmap.stages as Stage[]).flatMap((stage: Stage, index: number) => [
  {
    id: `intro-panel-${stage.id || index}`,
    title: stage.title,
    summary: stage.summary,
    sections: stage.intro || [],
    groups: stage.intro?.length ? [] : (stage.groups || []),
    subtopics: stage.subtopics || []
  },
  ...((stage.subtopics || []).map((subtopic) => ({
    id: `intro-panel-${subtopic.id}`,
    parent: {
      id: `intro-panel-${stage.id || index}`,
      title: stage.title
    } satisfies PanelParent,
    title: subtopic.title,
    summary: subtopic.summary,
    sections: [],
    groups: subtopic.groups || [],
    subtopics: []
  })))
]);

const panelMap = Object.fromEntries(
  drawerStages.map((stage) => [stage.id, stage])
);

export const GET = () =>
  new Response(JSON.stringify(panelMap), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate"
    }
  });
