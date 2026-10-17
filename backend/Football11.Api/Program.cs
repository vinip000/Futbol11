var builder = WebApplication.CreateBuilder(args);

// Registra os controllers na injeção de dependência
builder.Services.AddControllers();

// Configuração do OpenAPI
builder.Services.AddOpenApi();

var app = builder.Build();

// Habilita o OpenAPI em desenvolvimento
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// Mapeia os endpoints definidos nos controllers
app.MapControllers();

app.Run();