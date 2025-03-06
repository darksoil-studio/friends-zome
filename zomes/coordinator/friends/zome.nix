{ inputs, ... }:

{
  perSystem = { inputs', system, self', ... }: rec {
    packages.friends = inputs.tnesh-stack.outputs.builders.${system}.rustZome {
      workspacePath = inputs.self.outPath;
      crateCargoToml = ./Cargo.toml;
      zomeEnvironmentVars = {
        NOTIFICATIONS_COORDINATOR_ZOME_NAME = "notifications";
        LINKED_DEVICES_COORDINATOR_ZOME_NAME = "linked_devices";
      };

    };

  };
}

