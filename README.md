# TransformerExposition
A repository to create a visual interactive tutorial for transformer. The architecture presented in the tutorial is based 
on the [Attention is all you need](https://arxiv.org/abs/1706.03762) paper. 

## Accessing On Web
The visualization can be accessed at this [link](https://mathadoor.github.io/TransformerExposition/). 
Currently, the visualization back-end is hosted with a self-signed certificate. Thus, to be able to step through the translation, 
please accept the certificate by going to the following link: https://ec2-35-183-0-159.ca-central-1.compute.amazonaws.com:8080/one-predict

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

Also, update the api_url variable in src/neural-network/architecture.js to point to the local server as
```https://localhost:8080/one-predict```

### Running the visualization
To run the visualization, you will need to run the following command:
```
npm run build
npm run dev
```


