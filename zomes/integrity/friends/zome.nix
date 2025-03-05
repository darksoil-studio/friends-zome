{ inputs, ... }:

{
  perSystem =
    { inputs'
    , system
    , ...
    }: {
      packages.friends_integrity = inputs.tnesh-stack.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };
    };
}

