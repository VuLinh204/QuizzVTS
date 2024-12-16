using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SmartCards.Migrations
{
    /// <inheritdoc />
    public partial class Deck_Flashcard_Folder_Language_FolderDecks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "3a014aaf-ddb6-4720-8aea-b7e9a92db5f8");

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "874fbdba-b2b8-4b16-80da-b6c6236c4686");

            migrationBuilder.CreateTable(
                name: "Decks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsPublic = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    UserId1 = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Decks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Decks_Users_UserId1",
                        column: x => x.UserId1,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Folders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    UserId1 = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Folders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Folders_Users_UserId1",
                        column: x => x.UserId1,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Languages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Languages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FolderDecks",
                columns: table => new
                {
                    DeckId = table.Column<int>(type: "int", nullable: false),
                    FolderId = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FolderDecks", x => new { x.DeckId, x.FolderId });
                    table.ForeignKey(
                        name: "FK_FolderDecks_Decks_DeckId",
                        column: x => x.DeckId,
                        principalTable: "Decks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FolderDecks_Folders_FolderId",
                        column: x => x.FolderId,
                        principalTable: "Folders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Flashcards",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImageFileName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Definition = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsMark = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeckId = table.Column<int>(type: "int", nullable: false),
                    Term_LangId = table.Column<int>(type: "int", nullable: false),
                    Definition_LangId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flashcards", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Flashcards_Decks_DeckId",
                        column: x => x.DeckId,
                        principalTable: "Decks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Flashcards_Languages_Definition_LangId",
                        column: x => x.Definition_LangId,
                        principalTable: "Languages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Flashcards_Languages_Term_LangId",
                        column: x => x.Term_LangId,
                        principalTable: "Languages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.InsertData(
                table: "Languages",
                columns: new[] { "Id", "Code", "CreatedAt", "Name", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, "en", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8758), "English", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8758) },
                    { 2, "fr", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8760), "French", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8761) },
                    { 3, "de", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8762), "German", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8763) },
                    { 4, "es", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8764), "Spanish", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8765) },
                    { 5, "it", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8766), "Italian", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8767) },
                    { 6, "pt", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8833), "Portuguese", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8834) },
                    { 7, "zh", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8837), "Chinese", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8837) },
                    { 8, "ja", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8838), "Japanese", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8839) },
                    { 9, "ru", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8840), "Russian", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8841) },
                    { 10, "ar", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8842), "Arabic", new DateTime(2024, 12, 16, 12, 43, 8, 657, DateTimeKind.Local).AddTicks(8842) }
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4d4c62d4-dc25-4f01-b2a2-43e981cdd153", null, "User", "USER" },
                    { "8321f1e3-70ed-4583-9b4c-8cd26babf6e0", null, "Admin", "ADMIN" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Decks_UserId1",
                table: "Decks",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Flashcards_DeckId",
                table: "Flashcards",
                column: "DeckId");

            migrationBuilder.CreateIndex(
                name: "IX_Flashcards_Definition_LangId",
                table: "Flashcards",
                column: "Definition_LangId");

            migrationBuilder.CreateIndex(
                name: "IX_Flashcards_Term_LangId",
                table: "Flashcards",
                column: "Term_LangId");

            migrationBuilder.CreateIndex(
                name: "IX_FolderDecks_FolderId",
                table: "FolderDecks",
                column: "FolderId");

            migrationBuilder.CreateIndex(
                name: "IX_Folders_UserId1",
                table: "Folders",
                column: "UserId1");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Flashcards");

            migrationBuilder.DropTable(
                name: "FolderDecks");

            migrationBuilder.DropTable(
                name: "Languages");

            migrationBuilder.DropTable(
                name: "Decks");

            migrationBuilder.DropTable(
                name: "Folders");

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "4d4c62d4-dc25-4f01-b2a2-43e981cdd153");

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "8321f1e3-70ed-4583-9b4c-8cd26babf6e0");

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3a014aaf-ddb6-4720-8aea-b7e9a92db5f8", null, "Admin", "ADMIN" },
                    { "874fbdba-b2b8-4b16-80da-b6c6236c4686", null, "User", "USER" }
                });
        }
    }
}
