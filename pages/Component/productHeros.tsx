import React from "react";

function productHeros() {
  return (
    <>
      <div className="heroBack">
        <div className="animate__fadeIn animate__animated animate__delay-1s grid grid-cols-1 items-center bg-cover px-4 pb-20 pt-8 md:px-20 lg:grid-cols-2">
          <div className="py-4 md:py-0">
            <div className="flex items-center">
              <div className="h-[0.15rem] w-12 bg-blue-600"></div>
              <div className="ml-4 text-2xl font-medium text-blue-600">Design and Source Code</div>
            </div>
            <h1 className="text-2xl font-semibold text-slate-900 md:text-6xl">Digital Product</h1>
            <p className="mt-6 text-[1rem] font-medium leading-6 text-[#64748BBF] text-opacity-100">
              My Collection of design assets and Source Code <br className="hidden md:block" /> ready to use for your awesome projects.
            </p>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <a href="#" className="group flex h-16 w-16 items-center justify-center rounded-full bg-slate-200">
                <img
                  className="w-8 transition-all duration-200 ease-out group-hover:scale-125"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wMUCzkqhiSQDwAACf5JREFUaN7tm32MXFUZxn/vnd1+bj9obRswWMUaQCCClAiIQG1aKC1qAa1gC/ZjW7bG1OgfxC6029nWKCYCtfvRLSBiA0gNhioEBBGJYkwFIgQtBlGUqICAbIF2Z+eexz/OnZ07s/fOzG5n19hwkpu9M517znne5/0+t/DueHccUcNGe8Fd7SHAHGAs8GzzdZkjF3BPe4hhjUI3AjMlVgEH1m0aPdDBaC3U3Z4HQGgusFTiQgfzATqz7sgDHHhlmgC0SBwtaBKsz8MMoSMLcE+RwXOAxTJwgOA8wfLxlmd7NjxyAGMCmAVsEEyTQB7wGAfNB9RwwmhxPOKAe7KOQ+P7AZYJFhbAwgDoEwVr8lLDDaPA8sgzbGLcwcbZwBcFDSoCjV+fAztNo0DziALuyYZYiAFXCj4SU+WCDRfujxW09MOE67eMLMsjzrAC5gqukghS2CUSxCVgiw3jGyMIesQA93h7HI/RAnwwhVmKrNsUwbk5XDCS2dCIAO7aEhZyuHkSS50qMlu4/gHcmyFw/3eAAwOJSTLWCKYmq7KVf3eXwx59wxk5rDG7RWS31N+L1R3wzmwIZgBLBAuTwHpVVgy47QduFspPNL1P4qtOmu5GwG3Xn2ED0LEY6xETUx1V8XKg3Tm0vyGwyHmxEVhgwKa2+ubZdQW8sz3EkAErBGcPclCU264heFLY7gBTn9OJoLWCyQ7W5dHMeufZ9WVYIOxkwcqKYah4HRDaIeNFQaNgrbATo387W9hlAK11ZLlugCPbbUCsQMwpBweJ7D4E3BN6vZ4PXB57ZoyDlXnsQ/VU6vox7G13vnxWleyoKAH7KtDhsAMOpgMbJGaVPTdXsCYPmWvqxHJdAO/MhiAmSTSLQZsuMlsSd7VX8Hjo7WCJxPkpar8MOKVelnzYgLvbQ2QgYxFwQWVmPbvAc2BdDg4Jmy34kmBcCuDZguY8NH6tDiwfPsN+VzMR66MuRgLIOHjlBTud9T3hpAxiJXB6ZSFxGbAQg69sOjyuDwtwdzbE/AyfEpxZuTgYyKyeBPY4jUXYRwWrRalHZ/AcMwXr8mKKgv8hYAA5PozvZIytHIKEsINAJ7iXQm/Ph4C3K5lBocBwYr7EYgO+vGn4qj1swN3ZEIwMPsk4OZUhlXz/a2E/VbTs5rfffsZBlyBfkWEDwQTB6n4xXYdRXRwew2Ku4AvlzDjKSz8QvCy4yeA1TLS1BWyaOBHB3YLflD+fUlWdLbjEBC2bh8fysAB3+1p3ArBOvltRMQQ5XyDcLexBARujxrsD+uGfDjqVoNqFuWKCGCe4OgfHD7euGDLgnnZXULtFgqXV00cD+CvwPcP1b9xcXHJbm78XPCB4hHRm49+dJliRDyxYOwyWhww49KKdIVifVOsODilyQreH4vdKONn5JhDCfxzscPCvagJ0vum7HKdT3TBYHhLg7uwAuxcDH0/aEINYsX3Cvh8YrnVzwnJtQeTB9YjgzgFgSjaTaInZDq7qRw0rh+ixhwRYXkGPxdvu2BQG4p/fAToMvVBp3m+3ZXBYXnCLg+eS4/ig67OGfRKMq66rHXTNgLvaQ4KAAFguOD2x1i2thBA8LNgLRiK7seGAxkb9QeJWibCCShfujxZsyEtTh8JxTYC72kPfmnCcJlgjyNTgrN4UdjPozVpM7Ya2gIM5k+CHJWFKFexZnCdsIRjLa2S5NoYF5g+wrwaOS08f41kVexEPo+rsxpYh75sB3xH0VhSoX2+iUEsezayV5ZpVWnCW4NPVmQVhfwHtwDjY2la7m9i+JfCaBA8JHkRV10FwprAlMvj8tdV1qaHaD7p8kjE1CkMzBkvaCowWLid0W17BPiE2tYVNYMe4qEBwsaskV6YkQwsFP3dwkWcxucwUipIRrXPiMUzPV8NTMSvtzIYEfoF1ghujTKe4OVm0acUyKp4QXCp48VUZU9AGwTUCc6BB6SfFEFScFwQZB9OjvwkCsmhdw8+rb7nQrg0Cwh9tTYdVlWEH78Wf/I1LlnQJuznBbRn04jse7HHAysij1mAKqeVhgqdW7B4TtowMdzp4uhKeVAPrzDoONL0FvjiYm7x4sZkeLXy/4I5+jAAXAKsUtWeqOJ9qMbdoPipX64Gk5AMSzaFo/EwFW67gUcSkt5rm4Mu/hvRNWwTb3gB2GbzeL3AEp8h3IWtp16Z2SdK1aZDvQHCJ4BwBSzYmg04E3JkNMWxMxNBJiawovlFDcK/gF3m/zkSgRbEQVjlRKf2cCF4pwlaJfR8j2BDC5DQqB31deIVI6BNRkmHpCw9kVH+X6EIc9C8nsUhwxZBUuRLzA4KwxN9Q+nmBYDEGi1oHs5wgBxUYWkN5GBq0SRGRvUfwZD9gME3QLJg0FEdVXQAW+1tQZyX9doKDVfmUzkgJ4OuvyxduLxBcVKqGVmi1xFTOAH4n6DAjHz19qeDcerBbIRoUmgppJnCOxFIDFpSxXAK4qdHAdwibBZNLN6koyShRqygM8UJOkIE5gmZiPebanFEFwaiCAJT63Djn+1/vL1fqAcAd2ZBXdADBCmB+upRLJP0rwZ6I2QbBWsEZrhoIf+8EOSm6KLtETlj02WL39AskWTWBfUywqs8RzIt57JLEY4ZNOgHvqBqTHUjJIm8AOwy9mpNhcAZRQw+qsucEtwM/k2Gxwr7UCRlAeeylMTrSSWxAxBoH5uDKTMCPgadKAHdmHQaBQ1cIjk/zkkWWDcE9Eg84DPMqvFo+LKSrsQYA7QO2GTzfvaX24uLiVkfGv13QJzhVFA/cU9acjT/ce+b8VuUf3WYE26NGmEOnyicZCWEobruG4G9AtxkH+/3v5gmWFhZNZLgotLcEN5l4XkPsqP1kW1CY/375xl9RKxLsPRrLgHkA539dBJmMEBoPrAZv5KoS74C7HXoqJzCYga+kptXoqB4B7pMZnTXWyfEhRN7XyrscvF7JdKJxNNACNBEUndYClTTUFWO1GPMiIH8U3GJY2BtJUAmnhinsvgJ8F+hlmI3lvVuDwlyPCm4tzF8u5LKxALgQIAArtFynxJl1AyqieMzrA3rGOu3PCSb5MLQ2zcmVgUVwF9gvATqywz/0uG+rEYo+iV2CZyuwWxhN+G7NrEDocqKEu1DXljqogioB8Jhg9yEzzPe1rlTZuVKSs4uk/zTQBervGIKjShvOoDfkT078QJQ2/VLGWcDlDcAUwR75+jyWQQnvwAZYd4I7DP6d8xMcBeTxauXighlwIqUbeKD3Zds/edbwVLl8PLjVWNAqBLvl38V+TzEIlLiSwgiAJuvY4oJ+Z8rLgRkhRh5hgX8CGTmEE/SHfoIxPnqbM7GPXk2VQxxFBjBCevtgfC6DxsChHOT+DL0vQSYDj/+2fq+VnNQqnp0G817DZJj3PIZAlvEaZlZ4Tw7kRv9/8bw7Rnv8F67SE04QBXv1AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTAzLTIwVDExOjU3OjI2KzAwOjAwsGlgUwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wMy0yMFQxMTo1NzoyNiswMDowMME02O8AAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMTkyQF1xVQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxOTLTrCEIAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2NzkzMTM0NDa+FQ+0AAAAD3RFWHRUaHVtYjo6U2l6ZQAwQkKUoj7sAAAAVnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vbW50bG9nL2Zhdmljb25zLzIwMjMtMDMtMjAvMTVjZjYyZTAxYzVhOTIxZWI1Nzk2ZWRkYWYyNWM4YzAuaWNvLnBuZzcuKpwAAAAASUVORK5CYII="
                  alt=""
                />
              </a>
              <a href="#" className="group flex h-16 w-16 items-center justify-center rounded-full bg-slate-200">
                <img className="w-10 transition-all duration-200 ease-out group-hover:scale-125" src="img/icon/uplabs.svg" alt="" />
              </a>
              <a href="#" className="group flex h-16 w-16 items-center justify-center rounded-full bg-slate-200">
                <img className="w-8 transition-all duration-200 ease-out group-hover:scale-125" src="img/icon/figma.svg" alt="" />
              </a>
            </div>
          </div>
          {/* herospic */}
          <div className="relative">
            <img className="animate-floatDown my-11-10 top-0 w-full rounded-3xl drop-shadow" src="/img/anonime.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default productHeros;
