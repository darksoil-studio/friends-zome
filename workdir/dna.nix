{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.friends_test_dna =
      inputs.tnesh-stack.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          linked_devices_integrity = inputs'.linked-devices-zome.packages.linked_devices_integrity;
          linked_devices = inputs'.linked-devices-zome.packages.linked_devices;
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

