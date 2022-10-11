import { PlatFormEnum } from "../types/Platform.enum";

export class ReportDto{
  public reportId: string;
  public reporterNumber: string;
  public suspectNumber: string;
  public platForm: PlatFormEnum;
  public incidentDate: Date
  public description: string;

}