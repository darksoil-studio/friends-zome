{ inputs, ... }:

{
  perSystem = { inputs', system, ... }: {
    packages.friends_integrity =
      inputs.holochain-utils.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };
  };
}

