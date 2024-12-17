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
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Decks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Decks_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
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
                    { 1, "en", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2121), "English", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2122) },
                    { 2, "fr", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2124), "French", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2124) },
                    { 3, "de", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2126), "German", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2126) },
                    { 4, "es", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2128), "Spanish", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2128) },
                    { 5, "it", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2130), "Italian", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2130) },
                    { 6, "pt", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2132), "Portuguese", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2132) },
                    { 7, "zh", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2134), "Chinese", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2135) },
                    { 8, "ja", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2136), "Japanese", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2137) },
                    { 9, "ru", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2138), "Russian", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2139) },
                    { 10, "ar", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2140), "Arabic", new DateTime(2024, 12, 16, 15, 19, 29, 748, DateTimeKind.Local).AddTicks(2141) }
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "814502b4-397f-4da8-8a43-9d8335e5edd6", null, "Admin", "ADMIN" },
                    { "cede7ac3-0131-4122-94d7-771aa323bcca", null, "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Decks_UserId",
                table: "Decks",
                column: "UserId");

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
                keyValue: "814502b4-397f-4da8-8a43-9d8335e5edd6");

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "cede7ac3-0131-4122-94d7-771aa323bcca");

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
