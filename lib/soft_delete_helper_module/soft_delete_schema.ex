defmodule SoftDeleteHelperModule.Schema do
  @moduledoc """
  Contains schema macros to add soft delete fields to a schema
  """
  import Ecto.Query

  @doc """
  Adds the deleted_at and is_deleted columns to a schema

      defmodule User do
        use Ecto.Schema

        import SoftDeleteHelperModule.Schema

        schema "users" do
          field :first_name, :string

          soft_delete_schema()
        end
      end
  """
  defmacro soft_delete_schema do
    quote do
      field(:is_deleted, :boolean, default: false)
      field(:deleted_at, :utc_datetime)
    end
  end

  @doc """
  Adds where clause to the query for non soft deleted rows

  ## Parameters
    - query: ecto query
  """
  def with_non_soft_delete(query) do
    query
    |> where([t], t.is_deleted == false)
  end

  @doc """
  Marks a row deleted when passed its specific struct pertaining to any table

  Returns the changeset for soft deleted row
  The user just need to update it using Repo.update(changeset)

  ## Parameters
    - struct: Entity for DB
  """
  def delete_entity(struct) do
    struct
    |> Ecto.Changeset.change(%{is_deleted: true, deleted_at: Timex.now()})
  end
end
