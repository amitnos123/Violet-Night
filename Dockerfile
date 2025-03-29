# # Uses Rust latest version as our base image
FROM rust:latest

# # Goes to the app directory (Like in Terminal)
WORKDIR /home/Violet-Night/.

# # Copy the app into the container
COPY . .

# # Install dependencies
RUN cargo install --path .

# # Set port enviornment variable
ENV PORT=1420
# # Expose the port so our computer can access it
EXPOSE 1420

# #run the app
# CMD ["yarn", "tauri", " dev"]