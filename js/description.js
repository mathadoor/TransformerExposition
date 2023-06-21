d3.select("#description")
    .append("div")
        .attr("id", "description-top-button-container")
        .on("click", function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        })
d3.select("#description-top-button-container")
    .append("img")
        .attr("src", "icons/top.svg")
        .attr("id", "description-top-button-img")
d3.select("#description-top-button-container")
    .append("div")
        .attr("id", "description-top-button-text")
        .text("top")
d3.select("#description")
    .append("div")
        .attr("id", "description-section-what")
        .attr("class", "description-sec")
        .append("h1")
            .text("What is a Transformer?")
d3.select("#description-section-what")
    .append("p")
        .html(`A quick description fo the transformer model.`)

// How does Stable Diffusion work?
d3.select("#description")
    .append("div")
        .attr("id", "description-section-how-work")
        .attr("class", "description-sec")
        .append("h1")
            .text("How do Transformers work?")
d3.select("#description-section-how-work")
    .append("p")
        .text('Transformer innerworking')
d3.select("#description-section-how-work")
    .append("p")
        .html('Next paragraph.')
d3.select("#description-section-how-work")
    .append("p")
        .html('Paragraph 2.')
d3.select("#description-section-how-work")
    .append("p")
        .html('Paragraph with list')
        .append("ol")
        .attr("id", "description-generation-main-steps-ol")
// d3.select("#description-generation-main-steps-ol")
//     .append("li")
//         .html('<a style="font-weight: 500" href="#description-subsec-text-representation-generation">Text Representation Generation</a>: Stable Diffusion converts a text prompt into a text vector representation to guide the image generation.')
// d3.select("#description-generation-main-steps-ol")
//     .append("li")
//         .html('<a style="font-weight: 500" href="#description-subsec-image-representation-refining">Image Representation Refining</a>: Starting with a random noise, Stable Diffusion refines the image representation little by little, with the guidance of the text representation. Stable Diffusion repeats the refining over multiple timesteps (50 in our Diffusion Explainer).')
// d3.select("#description-generation-main-steps-ol")
//     .append("li")
//         .html('<a style="font-weight: 500" href="#description-subsec-image-upscaling">Image Upscaling</a>: Stable Diffusion upscales the image representation into a high-resolution image.')
// d3.select("#description-section-how-work")
//     .append("p")
//         .text("Now, let's look closer into each process.")

// Text Representation Generation
// d3.select("#description-section-how-work")
//     .append("div")
//         .attr("id", "description-subsec-text-representation-generation")
//         .attr("class", "description-subsec")
//         .append("h2")
//             .text("Text Representation Generation")
// d3.select("#description-subsec-text-representation-generation")
//     .append("p")
//         .text("Text representation generation consists of tokenizing and text encoding.")
// // Tokenizing
// d3.select("#description-subsec-text-representation-generation")
//     .append("div")
//         .attr("id", "description-subsubsec-tokenizing")
//         .attr("class", "description-subsubsec")
// d3.select("#description-subsubsec-tokenizing")
//     .append("div")
//         .attr("class", "description-subsubsec-title")
//         .html('1. Tokenizing')
// d3.select("#description-subsubsec-tokenizing")
//     .append("p")
//         .html("Tokenizing is a common way to handle text input to standardize the format of the input and enable the text input to be processed by neural networks.")
// d3.select("#description-subsubsec-tokenizing")
//     .append("div")
//         .attr("class", "description-paragraph")
//         .attr("id", "description-subsubsec-tokenizing-token-example-paragraph")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//     .html(`Stable Diffusion tokenizes a text prompt into a sequence of tokens.
//     For example, it splits the text prompt `)
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .style("color", "var(--text3)")
//         .text("a cute and adorable bunny ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text("into the tokens ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("a")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(", ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("cute")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(", ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("and")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(", ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("adorable")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(", and ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("bunny")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(". Also, to mark the beginning and end of the prompt, Stable Diffusion adds ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("<start>")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(" and ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("<end>")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(" tokens at the beginning and the end of the tokens. The resulting token sequence for the above example would be ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("<start>")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(", ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("a")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(", ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("cute")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(", ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("and")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(", ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("adorable")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(", ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("bunny")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(", and ")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .attr("class", "text-vector-generator-token description-token")
//         .text("<end>")
// d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
//     .append("span")
//         .text(".")
//
// d3.select("#description-subsubsec-tokenizing")
//     .append("p")
//         .html("To ensure that all token sequences have the same length for easier computation, Stable Diffusion pads or truncates the token sequences to exactly 77 tokens. If the input prompt has fewer than 77 tokens, <end> tokens are added to the end of the sequence until it reaches 77 tokens. If the input prompt has more than 77 tokens, the last 77 tokens are retained and the rest are truncated. The number of tokens was set to balance performance and computational efficiency.")
// // Text encoding
// d3.select("#description-subsec-text-representation-generation")
//     .append("div")
//         .attr("id", "description-subsubsec-text-encoding")
//         .attr("class", "description-subsubsec")
// d3.select("#description-subsubsec-text-encoding")
//     .append("div")
//         .attr("class", "description-subsubsec-title")
//         .html('2. Text encoding')
// d3.select("#description-subsubsec-text-encoding")
//     .append("p")
//         .html(`Stable Diffusion converts each token in the token sequence into a text representation that contains image-related information. This is done by using the text encoder of a neural network called <a href="https://openai.com/research/clip">CLIP.</a>`)
// d3.select("#description-subsubsec-text-encoding")
//     .append("p")
//         .html("CLIP consists of an image encoder and text encoder, which encode an image and its text description into an image and text representation that are close to each other. Therefore, the text representation for a text prompt computed by CLIP’s text encoder is likely to contain information about the images described in the text prompt.")
//
// // Image Representation Refining
// d3.select("#description-section-how-work")
//     .append("div")
//         .attr("id", "description-subsec-image-representation-refining")
//         .attr("class", "description-subsec")
//         .append("h2")
//             .text("Image Representation Refining")
// d3.select("#description-subsec-image-representation-refining")
//     .append("img")
//         .attr("class", "description-gif")
//         .attr("id", "image-refining-description-gif")
//         .attr("src", "assets/gif/imagerefine.gif")
// d3.select("#description-subsec-image-representation-refining")
//     .append("p")
//         .text("Stable Diffusion generates an image representation that adheres to the text prompt by refining a randomly initialized noise over multiple timesteps. Each refinement step involves iteratively predicting and removing noise to gradually improve the quality of the image representation.")
// // Noise Prediction
// d3.select("#description-subsec-image-representation-refining")
//     .append("div")
//         .attr("id", "description-subsubsec-noise-prediction")
//         .attr("class", "description-subsubsec")
// d3.select("#description-subsubsec-noise-prediction")
//     .append("div")
//         .attr("class", "description-subsubsec-title")
//         .html('1. Noise Prediction')
// d3.select("#description-subsubsec-noise-prediction")
//     .append("p")
//         .html("At each timestep, a neural network UNet predicts noise in the image representation of the current timestep. UNet takes three inputs:")
// d3.select("#description-subsubsec-noise-prediction")
//     .append("ol")
//         .attr("id", "description-unet-input-ol")
// d3.select("#description-unet-input-ol")
//     .append("li")
//     .html(`<span style="font-weight: 500;">Image representation</span> of the current timestep`)
// d3.select("#description-unet-input-ol")
//     .append("li")
//     .html(`<span style="font-weight: 500; color: var(--text3);">Text representation</span> of the text prompt to guide what noise should be removed from the current image representation to generate an image adhering to the text prompt`)
// d3.select("#description-unet-input-ol")
//     .append("li")
//     .html(`<span style="font-weight: 500;">Timestep</span>, encoded as a vector, to indicate the amount of noise remaining in the current image representation`)
//
// d3.select("#description-subsubsec-noise-prediction")
//     .append("p")
//         .html(`In other words,
//         UNet predicts a prompt-conditioned noise in the current image representation
//         under the guidance of the text prompt's representation and timestep.`)
// d3.select("#description-subsubsec-noise-prediction")
//     .append("p")
//         .html(`However, even though we condition the noise prediction with the text prompt,
//         the generated image representation may not adhere strongly enough to the text prompt.
//         To improve the adherence of the predicted noise to the text prompt,
//         Stable Diffusion additionally predicts <span style="color: #a0a0a0;">generic noise conditioned on an empty prompt (" ")</span>.
//         The final noise prediction is a weighted sum of the predicted
//         <span style="color: #a0a0a0;">generic noise</span> and the
//         <span style="color: var(--text3);">prompt-conditioned noise</span>
//         with the weights controlled by the hyperparameter <span style="font-weight: 500;">guidance scale</span>:`)
// d3.select("#description-subsubsec-noise-prediction")
//     .append("p")
//         .attr("class", "description-equation")
//         .attr("id", "description-equation-gs")
// d3.select("#description-equation-gs")
//     .append("span")
//         .attr("class", "description-equation-term")
//         .style("background-color", "#a0a0a020")
//         .text("guidance scale")
// d3.select("#description-equation-gs")
//     .append("span")
//         .attr("class", "description-equation-op")
//         .text(" x ")
// d3.select("#description-equation-gs")
//     .append("span")
//         .style("background-color", "#a0a0a020")
//         .style("color", "var(--text3)")
//         .attr("class", "description-equation-term")
//         .text("prompt-conditioned noise")
// d3.select("#description-equation-gs")
//     .append("span")
//         .attr("class", "description-equation-op")
//         .text(" + ")
// d3.select("#description-equation-gs")
//     .append("span")
//         .attr("class", "description-equation-op")
//         .text("(1 - ")
// d3.select("#description-equation-gs")
//     .append("span")
//         .attr("class", "description-equation-term")
//         .style("background-color", "#a0a0a020")
//         .text("guidance scale")
// d3.select("#description-equation-gs")
//     .append("span")
//         .attr("class", "description-equation-op")
//         .text(") x ")
// d3.select("#description-equation-gs")
//     .append("span")
//         .attr("class", "description-equation-term")
//         .style("background-color", "#a0a0a020")
//         .style("color", "#909090")
//         .text("generic noise")
// d3.select("#description-subsubsec-noise-prediction")
//     .append("p")
//     .html(`A guidance scale of 0 means no adherence to the text prompt, while a guidance scale of 1 means using only the prompt-conditioned noise without introducing generic noise. Larger guidance scales result in stronger adherence to the text prompt. To see how the introduction of generic noise and guidance scale enhances image quality, you can check out our Diffusion Explainer by setting the guidance scale to 1 or 7.`)
// // Noise Removal
// d3.select("#description-subsec-image-representation-refining")
//     .append("div")
//         .attr("id", "description-subsubsec-noise-removal")
//         .attr("class", "description-subsubsec")
// d3.select("#description-subsubsec-noise-removal")
//     .append("div")
//         .attr("class", "description-subsubsec-title")
//         .html('2. Noise Removal')
// d3.select("#description-subsubsec-noise-removal")
//     .append("p")
//         .html("Stable Diffusion then decides how much of the predicted noise to actually remove from the image, as determined by a “scheduler.” Gradually removing small amounts of noise helps refine the image gradually and produce sharper images.")
// d3.select("#description-subsubsec-noise-removal")
//     .append("p")
//         .html("By default, the scheduler makes this decision by accounting for the total number of timesteps. The downscaled noise is then subtracted from the image representation of the current timestep to obtain the refined representation, which becomes the image representation of the next timestep:")
// d3.select("#description-subsubsec-noise-removal")
//     .append("p")
//         .attr("class", "description-equation")
//         .attr("id", "description-equation-denoise")
// d3.select("#description-equation-denoise")
//     .append("span")
//         .attr("class", "description-equation-term")
//         .style("background-color", "#a0a0a020")
//         .html(`image representation of timestep <span style="font-style: italic;">t+1</span>`)
// d3.select("#description-equation-denoise")
//     .append("span")
//         .attr("class", "description-equation-op")
//         .html(` = `)
// d3.select("#description-equation-denoise")
//     .append("span")
//         .attr("class", "description-equation-term")
//         .style("background-color", "#a0a0a020")
//         .html(`image representation of timestep <span style="font-style: italic;">t</span>`)
// d3.select("#description-equation-denoise")
//     .append("span")
//         .attr("class", "description-equation-op")
//         .html(` - `)
// d3.select("#description-equation-denoise")
//     .append("span")
//         .attr("class", "description-equation-term")
//         .style("background-color", "#a0a0a020")
//         .html(`downscaled noise`)
//
// // Image Upscaling
// d3.select("#description-section-how-work")
//     .append("div")
//         .attr("id", "description-subsec-image-upscaling")
//         .attr("class", "description-subsec")
//             .append("h2")
//                 .text("Image Upscaling")
// d3.select("#description-subsec-image-upscaling")
//     .append("img")
//     .attr("class", "description-gif")
//     .attr("src", "assets/gif/upscale.gif")
// d3.select("#description-subsec-image-upscaling")
//     .append("p")
//         .text("After all denoising steps have been completed, Stable Diffusion uses a neural network called Decoder to upscale the image representation into a high-resolution image. The refined image representation has been fully denoised with the guidance of the text representations, and the resulting high-resolution image should adhere strongly to the text prompt.")
//
// // What can we change
// d3.select("#description")
//     .append("div")
//         .attr("id", "description-section-change")
//         .attr("class", "description-sec")
//         .append("h1")
//             .text("What can we change?")
// d3.select("#description-section-change")
//     .append("p")
//         .text("You have control over text prompt and hyperparameters in our Diffusion Explainer to change the generated images:")
// d3.select("#description-section-change")
//     .append("ul")
//         .attr("id", "description-hyperparameter-ol")
// d3.select("#description-hyperparameter-ol")
//     .append("li")
//     .html(`Text prompt: Description of the image you want to generate. A more detailed text prompt generally leads to better quality images.`)
// d3.select("#description-hyperparameter-ol")
//     .append("li")
//     .html(`Seed: Random seed for the initialization of the image representation at timestep 0. Changing the seed will result in different image representation at timestep 0 and therefore different images.`)
// d3.select("#description-hyperparameter-ol")
//     .append("li")
//     .html(`Guidance scale: How closely the generated image adheres to the text prompt. Increasing the guidance scale leads to stronger adherence but may degrade the creativity of the generated images.`)
// d3.select("#description-section-change")
//     .append("p")
//         .text("Additionally, there are other hyperparameters that are not included in the Diffusion Explainer, such as the total number of timesteps, image size, and the type of scheduler.")

// How implemented?
d3.select("#description")
    .append("div")
        .attr("id", "description-section-implement")
        .attr("class", "description-sec")
        .append("h1")
            .text("How is TransformerExplainer implemented?")
d3.select("#description-section-implement")
    .append("p")
        .text("The interactive visualization used in this article is built using Idyll, Javascript and D3.js")

// How implemented?
d3.select("#description")
    .append("div")
        .attr("id", "description-section-who")
        .attr("class", "description-sec")
        .append("h1")
            .text("Who developed the Diffusion Explainer?")
d3.select("#description-section-who")
    .append("p")
        .html(`Transformer Explainer was developed by  
        <a href="https://mathadoor.github.io">Harpreet</a>, based on the work on <a href="https://poloclub.github.io/diffusion-explainer/">DiffusionExplainer</a> by
        <a href="https://poloclub.github.io/polochau/">Polo Chau</a>.`)