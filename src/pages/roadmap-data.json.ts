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
