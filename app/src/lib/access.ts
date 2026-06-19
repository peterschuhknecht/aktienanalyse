import type { Role, Topic, UserEntitlement } from "./types";

export function canReadTopic(user: UserEntitlement, topic: Topic) {
  if (user.role === "admin") {
    return true;
  }

  if (topic.access === "free-preview") {
    return true;
  }

  return user.status === "active" && user.topics.includes(topic.id);
}

export function roleLabel(role: Role) {
  if (role === "admin") {
    return "Admin";
  }

  if (role === "customer") {
    return "Kunde";
  }

  return "Gast";
}
