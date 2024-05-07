export class Response {
  public success: boolean = false;
  public statuscode: string | null = "500";
  public message: string | null = null;
  public values: any;
  public Value:  | null = null;
  public groups: number | null = null;
  public pagging: number | null = 10;

}
