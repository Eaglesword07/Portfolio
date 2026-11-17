import { useEffect } from "react";

const SITE = "Douglas Adekanye";

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} · Software Engineer, Designer and Developer. Portfolio, services and contact.`;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }
      tag.content = description;
    }
  }, [title, description]);
}