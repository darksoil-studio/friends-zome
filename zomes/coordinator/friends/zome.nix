{ inputs, ... }:

{
  perSystem =
    { inputs'
    , system
    , self'
    , ...
    }: rec {
      packages.friends = inputs.tnesh-stack.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };

    };
}

