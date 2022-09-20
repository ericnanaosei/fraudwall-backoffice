using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fraudwall_backoffice.Migrations
{
    public partial class modify_investigation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsClosed",
                table: "AppReportInvestigations");

            migrationBuilder.AddColumn<int>(
                name: "InvestigationStatus",
                table: "AppReportInvestigations",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InvestigationStatus",
                table: "AppReportInvestigations");

            migrationBuilder.AddColumn<bool>(
                name: "IsClosed",
                table: "AppReportInvestigations",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }
    }
}
