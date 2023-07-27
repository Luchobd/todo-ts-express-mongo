export interface EmailUser {
  name?: string;
  email?: string;
  type?: "register" | "forgotten" | "change" | undefined;
}
