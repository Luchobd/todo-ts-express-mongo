export interface EmailUser {
  name?: string;
  email?: string;
  key?: string;
  type?: "register" | "forgotten" | "change" | undefined;
}
