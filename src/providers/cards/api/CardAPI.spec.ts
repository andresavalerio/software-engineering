import { setupMockServer } from "helpers/tests";
import { requestCardFromUserNotebook } from "./CardAPI";
import { cardHandler } from "./CardMockServer";

describe(`card API`, () => {
    
  setupMockServer(cardHandler)

  describe(`Card API get notebooks cards`, () => {
    
    it(`Card API request cards of student`, async () => {
        const login = "pedro";
        const notebook = "Acceptance Tests"
    
        const response = await requestCardFromUserNotebook(login, notebook);
    
        const userNotebooksName = response.notebook;
        const userCards = response.cards;
    
        expect(response).toBeDefined();
        expect(userNotebooksName).toBe("Acceptance Tests")
        expect(userCards).toHaveLength(10);
    })
    
  });
})