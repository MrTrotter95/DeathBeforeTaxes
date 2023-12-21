using DataAccessLayer.Context;
using Microsoft.EntityFrameworkCore;

var allowOrigins = "*";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<DbtdataContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("https://localhost:3000") // Add your client's origin
                           .AllowAnyMethod()
                           .AllowAnyHeader());
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
