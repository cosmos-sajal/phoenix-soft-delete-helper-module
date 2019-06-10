searchNodes=[{"ref":"SoftDeleteHelperModule.html","title":"SoftDeleteHelperModule","type":"module","doc":"SoftDeleteHelperModule keeps the contexts that define your domain and business logic. Contexts are also responsible for managing your data, regardless if it comes from the database, an external API or others."},{"ref":"SoftDeleteHelperModule.Application.html","title":"SoftDeleteHelperModule.Application","type":"module","doc":""},{"ref":"SoftDeleteHelperModule.Application.html#config_change/3","title":"SoftDeleteHelperModule.Application.config_change/3","type":"function","doc":"Callback invoked after code upgrade, if the application environment has changed. changed is a keyword list of keys and their changed values in the application environment. new is a keyword list with all new keys and their values. removed is a list with all removed keys. Callback implementation for Application.config_change/3."},{"ref":"SoftDeleteHelperModule.Application.html#start/2","title":"SoftDeleteHelperModule.Application.start/2","type":"function","doc":"Called when an application is started. This function is called when an application is started using Application.start/2 (and functions on top of that, such as Application.ensure_started/2). This function should start the top-level process of the application (which should be the top supervisor of the application&#39;s supervision tree if the application follows the OTP design principles around supervision). start_type defines how the application is started: :normal - used if the startup is a normal startup or if the application is distributed and is started on the current node because of a failover from another node and the application specification key :start_phases is :undefined. {:takeover, node} - used if the application is distributed and is started on the current node because of a failover on the node node. {:failover, node} - used if the application is distributed and is started on the current node because of a failover on node node, and the application specification key :start_phases is not :undefined. start_args are the arguments passed to the application in the :mod specification key (e.g., mod: {MyApp, [:my_args]}). This function should either return {:ok, pid} or {:ok, pid, state} if startup is successful. pid should be the PID of the top supervisor. state can be an arbitrary term, and if omitted will default to []; if the application is later stopped, state is passed to the stop/1 callback (see the documentation for the c:stop/1 callback for more information). use Application provides no default implementation for the start/2 callback. Callback implementation for Application.start/2."},{"ref":"SoftDeleteHelperModule.Migration.html","title":"SoftDeleteHelperModule.Migration","type":"module","doc":"Contains functions to add soft delete columns to a table during migrations"},{"ref":"SoftDeleteHelperModule.Migration.html#create_index_on_soft_delete/1","title":"SoftDeleteHelperModule.Migration.create_index_on_soft_delete/1","type":"function","doc":"Adds an index on is_deleted column of the given table Parameters table_name: the table for which the index has to be created"},{"ref":"SoftDeleteHelperModule.Migration.html#soft_delete_columns/0","title":"SoftDeleteHelperModule.Migration.soft_delete_columns/0","type":"function","doc":"Adds deleted_at and is_deleted column to a table. This column is used to track if an item is deleted or not and when defmodule MyApp.Repo.Migrations.CreateUser do use Ecto.Migration import SoftDeleteHelperModule.Migration def change do create table(:users) do add :firt_name, :string soft_delete_columns() end end end"},{"ref":"SoftDeleteHelperModule.Repo.html","title":"SoftDeleteHelperModule.Repo","type":"module","doc":""},{"ref":"SoftDeleteHelperModule.Schema.html","title":"SoftDeleteHelperModule.Schema","type":"module","doc":"Contains schema macros to add soft delete fields to a schema"},{"ref":"SoftDeleteHelperModule.Schema.html#delete_entity/1","title":"SoftDeleteHelperModule.Schema.delete_entity/1","type":"function","doc":"Marks a row deleted when passed its specific struct pertaining to any table Returns the changeset for soft deleted row The user just need to update it using Repo.update(changeset) Parameters struct: Entity for DB"},{"ref":"SoftDeleteHelperModule.Schema.html#soft_delete_schema/0","title":"SoftDeleteHelperModule.Schema.soft_delete_schema/0","type":"macro","doc":"Adds the deleted_at and is_deleted columns to a schema defmodule User do use Ecto.Schema import SoftDeleteHelperModule.Schema schema &quot;users&quot; do field :first_name, :string soft_delete_schema() end end"},{"ref":"SoftDeleteHelperModule.Schema.html#with_non_soft_delete/1","title":"SoftDeleteHelperModule.Schema.with_non_soft_delete/1","type":"function","doc":"Adds where clause to the query for non soft deleted rows Parameters query: ecto query"}]