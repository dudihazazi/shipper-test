import type { IDriverRes } from "@/types/driver";

import getDob from "./getDob";

export default function apiNormalizer(data: IDriverRes | undefined) {
  const _data = data || ({} as IDriverRes);
  const result = _data.results || [];

  const normalized = result.map((info) => {
    const name = info.name || {};
    const dob = info.dob?.date || "";

    return {
      id: info.id?.value || "",
      img: info.picture?.medium || "",
      firstName: name.first || "",
      lastName: name.last || "",
      phone: info.phone || "",
      email: info.email || "",
      dob: getDob(dob),
    };
  });

  return normalized;
}
