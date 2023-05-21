# Hangman-with-Hsuan
A nerdy way to say something on special day
> [Hangman Game](https://chialingweng.github.io/hangman/)

<img src="https://media.giphy.com/media/3o7TKRNtcQkHuPUeKQ/source.gif" />

## Preview on local compiler
Download VS Code Extension: Live Server\
Right click on index.html and choose <b>Open with Live Server</b>\
Any change saved will be updated dynamically
## .js .jsx .css and .html
Here I will give a brief introduction based on my understanding, you may find a lot more detailed explanation online.
<pre>
 .js     The script part
 .css    The visual layout part
 .html   The structure of the webpage
 .jsx    Javascript integrates with HTML 
        --> enable change properties of a class
</pre>
## Customize the Surprise
Open *hangmanizr.jsx* , 
You can change button tooltip and button name as

```
<button data-tooltip="YOUR BUTTON TOOLTIP" 
........
 value="animals" // Remember this value
........
</svg> YOUR BUTTON NAME</button>
```
You may apply to all of the 4 buttons, 
for example:

```
<button data-tooltip="520 words" 
........
</svg> Chia Ling</button>
```
From the button there are 4 values: <b>animals, css, html</b> and __phrasalVerbs__

Correspondent questions are stored in 4 lists:
> var animals = ["aardvark", "albatross", "alligator",...]\
> var cssProperties = [...]\
> var htmlElements = [...]\
> var phrasalVerbs =[...]
> 
You can just change the value and create your own question lists

## Quick Start to Build Your Own Webpage Game
1. [Fork](https://github.com/ChiaLingWeng/hangman/fork) this repo
2. Modify button name and question lists on your own repo as mentioned above
3. Save and commit the change
4. On your repo, click __Setting__ --> __Pages__ --> __Branch__ --> Select __master__ branch
   
   ![Alt Text](https://github.com/ChiaLingWeng/hangman/blob/master/readme_asset/github_page.png)
5. Wait for 2~3 mins and refresh this page, your own webpage url will appear on the top of this page
   
      ![Alt Text](https://github.com/ChiaLingWeng/hangman/blob/master/readme_asset/page_url.png)
6. Kindly star this repo if you find it intetesting!


## License
Licensed under the MIT License.
