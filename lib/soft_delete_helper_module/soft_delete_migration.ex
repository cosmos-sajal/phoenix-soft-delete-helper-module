defmodule SoftDeleteHelperModule.Migration do
  @moduledoc """
  Contains functions to add soft delete columns to a table during migrations
  """

  use Ecto.Migration

  @doc """
  Adds deleted_at and is_deleted column to a table. This column is used to track if an item is deleted or not and when

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
  """
  def soft_delete_columns() do
    add(:deleted_at, :utc_datetime, [])
    add(:is_deleted, :boolean, default: false, null: false)
  end

  @doc """
  Adds an index on is_deleted column of the given table

  ## Parameters
    - table_name: the table for which the index has to be created
  """
  def create_index_on_soft_delete(table_name) do
    create(index(table_name, [:is_deleted]))
  end
end
