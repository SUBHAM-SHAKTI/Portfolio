export type MarketingService = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
};

export const marketingServices: MarketingService[] = [
  {
    number: "01",
    title: "Digital Marketing Strategy",
    description:
      "Planning digital growth strategies, identifying audiences and building a clear direction for online brands.",
    tags: ["Strategy", "Brand Growth", "Research"],
    icon: "🎯",
  },
  {
    number: "02",
    title: "Social Media Management",
    description:
      "Managing social media presence through content planning, consistency and audience engagement.",
    tags: ["Instagram", "Facebook", "Engagement"],
    icon: "📱",
  },
  {
    number: "03",
    title: "Content & Creative Planning",
    description:
      "Developing creative ideas and content plans that communicate a brand's message clearly.",
    tags: ["Content Planning", "Creative Ideas", "Brand Voice"],
    icon: "✍️",
  },
  {
    number: "04",
    title: "Campaign & Performance Support",
    description:
      "Supporting digital campaigns with organised execution, performance tracking and improvement ideas.",
    tags: ["Campaigns", "Meta Ads", "Analytics"],
    icon: "📈",
  },
];