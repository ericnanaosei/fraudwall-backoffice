using fraudwall_backoffice.Comment;
using fraudwall_backoffice.Fraud;
using fraudwall_backoffice.Investigation;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.IdentityServer.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.EntityFrameworkCore;

namespace fraudwall_backoffice.EntityFrameworkCore;

[ReplaceDbContext(typeof(IIdentityDbContext))]
[ReplaceDbContext(typeof(ITenantManagementDbContext))]
[ConnectionStringName("Default")]
public class fraudwall_backofficeDbContext :
    AbpDbContext<fraudwall_backofficeDbContext>,
    IIdentityDbContext,
    ITenantManagementDbContext
{
    /* Add DbSet properties for your Aggregate Roots / Entities here. */

    #region Entities from the modules


    //Identity
    public DbSet<IdentityUser> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<IdentityClaimType> ClaimTypes { get; set; }
    public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
    public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
    public DbSet<IdentityLinkUser> LinkUsers { get; set; }

    // Tenant Management
    public DbSet<Tenant> Tenants { get; set; }
    public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }

    // Fraud-wall entities
    public DbSet<FraudNumber> FraudNumbers { get; set; }
    public DbSet<ReportInvestigation> ReportInvestigations { get; set; }
    public DbSet<InvestigationComment> InvestigationComments { get; set; }

    #endregion

    public fraudwall_backofficeDbContext(DbContextOptions<fraudwall_backofficeDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */

        builder.ConfigurePermissionManagement();
        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureIdentity();
        builder.ConfigureIdentityServer();
        builder.ConfigureFeatureManagement();
        builder.ConfigureTenantManagement();

        /* Configure your own tables/entities inside here */

        builder.Entity<FraudNumber>(b =>
        {
           b.ToTable(fraudwall_backofficeConsts.DbTablePrefix + "FraudNumbers", fraudwall_backofficeConsts.DbSchema);
           b.ConfigureByConvention(); //auto configure for the base class props
           b.Property(x => x.PhoneNumber).IsRequired().HasMaxLength(10);
           //...
        });
        builder.Entity<ReportInvestigation>(b =>
        {
           b.ToTable(fraudwall_backofficeConsts.DbTablePrefix + "ReportInvestigations", fraudwall_backofficeConsts.DbSchema);
           b.ConfigureByConvention(); //auto configure for the base class props
           b.Property(x => x.ReportId).IsRequired();
        });
        builder.Entity<InvestigationComment>( b =>{
            b.ToTable(fraudwall_backofficeConsts.DbTablePrefix + "InvestigationComments", fraudwall_backofficeConsts.DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.InvestigationId).IsRequired();
            b.Property(x => x.UserId).IsRequired();
            b.HasOne<ReportInvestigation>().WithMany().HasForeignKey(x => x.InvestigationId).IsRequired();
        });
    }
}
