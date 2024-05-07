export class AuthVM {
  public Message: string | null = null;
  public IsAuthenticated: boolean = false;
  public Username: string | null = null;
  public Email: string | null = null;
  public Roles: string[] | null = null;
  public Token: string | null = null;
  public ExpiresOn: Date | null = null;
}
