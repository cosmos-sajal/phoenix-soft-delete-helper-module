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

#### Additional Functions and how to use them -
- `with_non_soft_delete(query)`

This function returns an ecto query with a where clause of all non deleted entries in your table.

Pass an ecto query as parameter

#### Example -
```
query = from(u in "users", select: u.id)
This returns #Ecto.Query<from u in "users", select: u.id>

Now pass the above query to the function as follows -
soft_deleted_query = SoftDeleteHelperModule.Schema.with_non_soft_delete(query)
This returns #Ecto.Query<from u in "users", where: u.is_deleted == false, select: u.id>

When you try to get the rows using MyApp.Repo.all(soft_deleted_query), this will return
all the non deleted entries
```

- `delete_entity(struct)`

This function returns a changeset with the entity deleted.

#### Example -
```
Get the struct you want to delete as follows -
entity = MyRepo.Repo.get(MyRepo.User, 1)

pass this entity to delete_entity function as follows -
deleted_entity = SoftDeleteHelperModule.Schema.delete_entity(entity)
This will return a changeset with is_deleted set to true and deleted_at set to now time

Now update the deleted_entity using -
MyRepo.Repo.update(deleted_entity)

This will update the DB table with is_deleted set to true and deleted_at set to now time.
```
