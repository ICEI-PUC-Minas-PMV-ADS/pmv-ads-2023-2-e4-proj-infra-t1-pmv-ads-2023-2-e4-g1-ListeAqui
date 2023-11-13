using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ProjetoEixo4_API.Models;
using System.Text;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Adicione a configuração de CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        corsPolicyBuilder =>
        {
            corsPolicyBuilder.WithOrigins("*") // Substitua "*" por domínios específicos para mais segurança
                             .AllowAnyHeader()
                             .AllowAnyMethod();
        });
});

builder.Services.AddControllers()
    .AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler=ReferenceHandler.IgnoreCycles);

//var connectionStringMysql = builder.Configuration.GetConnectionString("ConnectionMysql");
builder.Services.AddDbContext<AppDbContext>(options=>
    options.UseMySql(builder.Configuration.GetConnectionString("ConnectionMysql"), ServerVersion.Parse("10.4.25-MariaDB"))
//UseMySql
);

// configurando para o smarterAspNet
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql("Server=MYSQL8002.site4now.net;Database=db_aa1201_listeaq;Uid=aa1201_listeaq;Pwd=listeaquipuc2023", ServerVersion.Parse("10.4.25-MariaDB"))
);

builder.Services.AddAuthentication(options =>
{

    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

})

    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("bHtnQYUp6GtK81Qh1FR37R0mMNVYnF6y"))
        };

    });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Não usar, pois o swagger está na rota /swagger/index.html
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
        //c =>
    //{
       // c.SwaggerEndpoint("/swagger/v1/swagger.json", "Minha API V1");
        //c.RoutePrefix = string.Empty;
    //});
//}

app.UseHttpsRedirection();

// Habilita o CORS
app.UseCors();


app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
