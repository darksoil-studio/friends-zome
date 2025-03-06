{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.friends_test_dna =
      inputs.tnesh-stack.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          notifications_integrity =
            inputs'.notifications-zome.packages.notifications_integrity;
          notifications = inputs'.notifications-zome.packages.notifications;
          # This overrides all the "bundled" properties for the DNA manifest
          friends_integrity = self'.packages.friends_integrity;
          friends = self'.packages.friends;
        };
      };
  };
}

