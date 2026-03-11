// query function 範例 => https://github.com/get-convex/turbo-expo-nextjs-clerk-convex-monorepo/tree/c7f8e83c05aa6d0deb95897d82cc9bc4515a96dd/packages/backend/convex
import { query } from "./_generated/server";

// getMany 也會出現在 turbo 的 dashboard 裡的 Functions 分類
export const getMany = query({
    // Validators for arguments.
    args: {

    },

    // Function implementation.
    handler: async (ctx, args) => {
        // users : 因為 schema 有定義 fetch all users from our schema 
        // See https://docs.convex.dev/database/reading-data.
        const users = await ctx.db.query("users").collect();

        // Arguments passed from the client are properties of the args object.
        // console.log(args.first, args.second);

        // Write arbitrary JavaScript here: filter, aggregate, build derived data,
        // remove non-public properties, or create new objects.
        return users;
    },
});