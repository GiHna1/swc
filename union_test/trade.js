module.exports = async (client)=>{
	try{
		let data = "this is new trade";
		let key = await client.utils.keys.create();
		let trade = await client.trade.create(client, data, key);
		// console.log("trade:");
		// console.log(trade);
		// console.log("========================");
		// console.log("change:");
		// // trade.creator = "EOS123" + trade.creator.substring(6);	
		// console.log(trade);
		// console.log("========================");
		// let valid = await client.trade.valid(client, trade);
		// console.log("valid : " + valid);
		// console.log("========================");

		setTimeout(()=>{
			console.log('send');
			client.actions.send_trade(client, trade);
		}, 4000);

		setTimeout(()=>{
			console.log('cache:');
			console.log(global.p2p.cache);
		}, 10000);

	}catch(e){
		console.log(e);
	}
}