[[REDACTED]]




const main0 = async () => {

    wallets = JSON.parse(readFileSync(`./wallets/${tokenAddress}.json`, 'utf-8'));

    const walletCount = wallets.length;

    say('VolMaker', {
        font: 'tiny',
        align: 'center',
        gradient: ['red', 'green'],
        background: 'transparent',
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '0',
        independentGradient: false,
        transitionGradient: false,
        env: 'node'
    });

    const questions = [{
        type: 'select',
        name: 'optiontokens',
        message: 'Select Operation to Perform?',
        initial: 1,
        choices: [
            { name: 1, message: 'List Wallets Sol Balances >', value: 1 },
            { name: 12, message: 'List Wallets Token Balances >', value: 13 },
            { name: 13, message: 'List Wallets WSOL Balances >', value: 14 },
            { name: 19, message: 'Change Slippage (Default: 5 %) >', value: 19 },
            { name: 2, message: 'Transfer Trading Amount (Sol) to All Wallets >', value: 2 },
            { name: 3, message: 'Recover all Sol balances from Wallets to Main Wallet >', value: 3 },
            { name: 4, message: 'Start Booster Bot >', value: 4 },
            { name: 5, message: 'Quit >', value: 5 }
        ]
    }];

    const answers: any = await prompt(questions);
    if (answers.optiontokens == 2) {

        const solamnts: any = await prompt([
            {
                type: 'input',
                name: 'solAmounts',
                message: 'Enter Amount of SOL to transfer to each Wallet > ',
                async onSubmit(_name: any, value: any) {
                    try {
                        const p = Number(Number(value).toFixed(4));
                        if (isNaN(p)) throw Error('Not a Number');
                        return value;
                    } catch (Error) {
                        console.log('\n')
                        console.log('Invalid amount entered')
                        process.exit(0)
                    }
                }
            }
        ]);

        const solAmounts = solamnts.solAmounts;

        const tnsList: Transaction[] = [];
        const recvrWallet = privateKey;
        wallets = JSON.parse(readFileSync(`./wallets/${tokenAddress}.json`, 'utf-8'));

        for (var i = 0; i < wallets.length; i++) {
            const walletAddress = wallets[i].address;
            if (walletAddress === privateKey.publicKey.toBase58()) continue;


      [[REDACTED]]
      [[790 lines left]]
      [[this is only a file from the non-jito version]]
      [[ @benoriz0 on telegram]]
    
