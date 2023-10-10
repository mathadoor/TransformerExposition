# TransformerExposition
A repository to create a visual interactive tutorial for transformer. The architecture presented in the tutorial is based 
on the [Attention is all you need](https://arxiv.org/abs/1706.03762) paper. 

## Accessing On Web
The visualization can be accessed at this [link](https://mathadoor.github.io/TransformerExposition/).

## Running Locally
### Pre-requisites
Download the repository using the following command:
```
git clone https://github.com/mathadoor/TransformerExposition.git
```

To run the visualization locally, you will need to have node.js and npm locally installed. You can find the instructions
at [this link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Run the command ```npm install``` to 
install all the dependencies.

### Running the back-end server locally (Optional)
You will also need to run the back-end server locally. For this, you will need to create the python environment using the following command:
```
conda env create -f environment.yml
```

Activate the environment using the following command:
```
conda activate transformerExposition
```

Download the translation dataset by running the following commands
```
python spacy -m en_core_web_sm
python spacy -m de_core_news_sm
```

Also, update the api_url variable in src/neural-network/architecture.js to point to the local server as
http://127.0.0.1:8080/predictions/tinytransformer

### Running the visualization
To run the visualization, you will need to run the following command:
```
npm run build
npm run dev
```


