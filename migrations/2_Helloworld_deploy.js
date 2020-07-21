const Helloworld = artifacts.require("Helloworld");

module.exports = function(deployer) {
  deployer.deploy(Helloworld).then(function(instance, network, accounts){
  	instance.setMessage("Hello Again!", {value: 1000000, from: accounts[0]}).then(function(){
		instance.getMessage().then(function(message){
			console.log("Current message: " + message);
		});
	});
  });
};