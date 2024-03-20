# Blockchain basics lesson

I've been using Netlify recently to make a project that uses
endpoints. Unlike with Vercel where you can use the endpoint to fetch
the data dynamically Netlify needs to statically generate the data.

## Subtitle

There's some SvelteKit `prerender` settings that need configuration
here's what I set in the `svelte.config.js` file:

```swift
pub contract FungibleToken {

    pub resource interface Receiver {

        pub balance: Int

        pub fun deposit(from: @{Receiver}) {
            pre {
                from.balance > 0:
                    "Deposit balance needs to be positive!"
            }
            post {
                self.balance == before(self.balance) + before(from.balance):
                    "Incorrect amount removed"
            }
        }
    }

    pub resource Vault: Receiver {

        pub var balance: Int

        init(balance: Int) {
            self.balance = balance
        }

        pub fun withdraw(amount: Int): @Vault {
            self.balance = self.balance - amount
            return <-create Vault(balance: amount)
        }

        pub fun deposit(from: @{Receiver}) {
            self.balance = self.balance + from.balance
            destroy from
        }
    }
}
```
