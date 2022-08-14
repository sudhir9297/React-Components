import { duplicateSvg, deleteSvg, editSvg } from "./svgs";

export const ContentMenuOption = {
  duplicate: {
    label: "Duplicate",
    icon: duplicateSvg(),
  },
  delete: {
    label: "Delete",
    icon: deleteSvg(),
  },
  edit: {
    label: "Edit",
    icon: editSvg(),
  },
};
