import defaultSettings from "@/settings";

const title = defaultSettings.title || "金陵全书";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
