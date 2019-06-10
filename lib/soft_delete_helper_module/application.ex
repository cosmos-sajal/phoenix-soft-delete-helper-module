defmodule SoftDeleteHelperModule.Application do
  use Application

  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec

    opts = [strategy: :one_for_one, name: SoftDeleteHelperModule.Supervisor]
    Supervisor.start_link([], opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    SoftDeleteHelperModuleWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
