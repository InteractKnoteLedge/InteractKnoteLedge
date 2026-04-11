export type AppStatus = "available" | "coming_soon" | "in_progress";

export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: AppStatus;
  platforms: string[];
  accentColor: string;
  appStoreUrl?: string;
}

export const apps: App[] = [
  {
    id: "knoteledge",
    name: "KnoteLedge",
    tagline: "学習を、もっとスマートに。",
    description: "スケジュール・ノート・コミュニティが一体になった学習プラットフォーム。AIが学習時間を自動計算し、最適な日程を提案します。",
    status: "available",
    platforms: ["iOS"],
    accentColor: "#7eb8d4",
    appStoreUrl: "https://apps.apple.com/",
  },
  {
    id: "plachieve",
    name: "Plachieve",
    tagline: "目標と日常をつなぐ。",
    description: "計画を立てるだけで終わらせない、実行型のゴール管理アプリ。習慣・タスク・振り返りを一元管理します。",
    status: "available",
    platforms: ["iOS"],
    accentColor: "#a89fd4",
  },
];

