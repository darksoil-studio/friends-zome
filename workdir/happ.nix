{ inputs, ... }:

{
  perSystem = { inputs', lib, self', system, ... }: {
    packages.friends_test_happ =
      inputs.holochain-utils.outputs.builders.${system}.happ {
        happManifest = ./happ.yaml;

        dnas = {
          # Include here the DNA packages for this hApp, e.g.:
          # my_dna = inputs'.some_input.packages.my_dna;
          # This overrides all the "bundled" properties for the hApp manifest 
          friends_test = self'.packages.friends_test_dna;
        };
      };
  };
}
