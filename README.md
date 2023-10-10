# TransformerExposition
A repository to create a visual interactive tutorial for transformer. The architecture presented in the tutorial is based 
on the [Attention is all you need](https://arxiv.org/abs/1706.03762) paper. 

## Accessing On Web
The visualization can be accessed at this [link](https://mathadoor.github.io/TransformerExposition/). Please note the 
website does not allow translations of the custom inputs. For translating custom inputs, please run the website locally
as per the instructions below.

## Running Locally

### Pre-requisites
Download the repository using the following command:
```
git clone https://github.com/mathadoor/TransformerExposition.git
```
To run the visualization locally, you will need to have node.js and npm locally installed. You can find the instructions
at [this link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Run the command ```npm install``` to 
install all the dependencies.

### Running the front-end locally
To run the visualization, you will need to run the following command:
```
npm run build
npm run dev
```

### Running the back-end server locally (Optional)
The back-end server is used to translate the custom inputs. If you do not wish to translate custom inputs, you can skip
this step. To run the back-end server, follow the following steps:
1. Download and install docker from [this link](https://docs.docker.com/get-docker/).
2. Go to the backend-api folder ```cd backend-api```
3. Build the image by running the command ```docker build . -t tinytransformer```
4. Spin up the docker container using the command 
```sh
docker run --rm -it -p 127.0.0.1:8080:8080  -p 127.0.0.1:8081:8081 -p 127.0.0.1:8082:8082 --name mar -v $(pwd):/home/model-server/model-store tinytransformer
```
5. Open a new terminal and load the model by running the command
```sh
curl -X POST "localhost:8081/models?model_name=tinytransformer&url=TinyTransformer.mar&initial_workers=1"
```
6. Test the model by running the command
```sh
curl -H "Content-Type: application/json" -d '{"sentence":"The dog is running in a park."}' http://127.0.0.1:8080/predictions/tinytransformer
```




