# Soft Delete Module for Phoenix/Elixir Applications

#### What?

- Adds is_deleted (boolean), and deleted_at (timestamp) functioanlity in ecto (phoenix) tables/schemas.
- Provides functionality to get only non soft deleted entries from DB table.
- Provides functionality to (soft) delete a row in table.

#### How to install the dependency?
- (Pre-requisite) You should be using elixir and phoenix to make use of this module.
- Add the dependency in your application by adding the below line in `deps` method of your `mix.exs` file

`{:soft_delete_helper_module, "~> 0.0.1"}`

This will install the dependency in your project.

#### How to use this module?
- In Schema, modify the code accordingly

```
      defmodule User do
        use Ecto.Schema

        import SoftDeleteHelperModule.Schema

        schema "users" do
          field :first_name, :string

          soft_delete_schema()
        end
      end
```

- In the corresponding migration of the `user` schema, modify the code accordingly

```
      defmodule MyApp.Repo.Migrations.CreateUser do
        use Ecto.Migration

        import SoftDeleteHelperModule.Migration

        def change do
          create table(:users) do
            add :firt_name, :string

            soft_delete_columns()
          end
        end
      end
```

- After these changes, run the migration using `mix ecto.migrate`, this will create `users` table in your DB with columns `is_deleted` and `deleted_at`.
