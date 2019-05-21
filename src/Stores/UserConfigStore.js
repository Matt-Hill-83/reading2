// import "@firebase/firestore";
import { Collection, Document } from "firestorter";
import { struct } from "superstruct";

class UserConfig extends Document {
  constructor(source, options) {
    super(source, {
      ...(options || {}),
      schema: struct({
        text: "string?",
        isFavorite: "boolean?",
        name: "string?",
        type: "string?",
        image: "string?",
        family: "string?"
      })
    });
  }
}

const UserConfigStore = new Collection("userConfig", {
  DocumentClass: UserConfig
});

export { UserConfigStore };
