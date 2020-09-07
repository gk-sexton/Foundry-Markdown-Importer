import ImportWindow from "./ImportWindow";

Hooks.on("renderSidebarTab", async (app, html) => {
    if (app.options.id == "actors") {
        let button = $("<button class='import-cd'><i class='fas fa-file-import'></i>Tetra Cube Import</button>")
        button.on('click', ()=> {
            new ImportWindow().render(true);
        });
        html.find(".directory-footer").append(button);
    }
})