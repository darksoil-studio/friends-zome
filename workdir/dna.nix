{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.friends_test_dna =
      inputs.holochain-utils.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          linked_devices_integrity =
            inputs'.linked-devices-zome.packages.linked_devices_integrity;
          linked_devices = inputs'.linked-devices-zome.packages.linked_devices;
          # This overrides all the "bundled" properties for the DNA manifest
          friends_integrity = self'.packages.friends_integrity;
          friends = self'.packages.friends;

          encrypted_links_integrity =
            inputs'.private-event-sourcing-zome.packages.encrypted_links_integrity;
          encrypted_links =
            inputs'.private-event-sourcing-zome.packages.encrypted_links;

        };
      };
  };
}

