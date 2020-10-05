<form
  className="container mx-auto mb-5 md:w-2/3"
  onSubmit={this.handleSubmit}
  ref={this.setSourceRef}
>
  <div className="highlighted-form">
    <input
      className="bg-white focus:outline-none rounded-lg py-3 px-5 block w-full appearance-none leading-normal mx-auto shadow-lg focus:shadow-xl text-center text-lg"
      id="e:from"
      name="from"
      type="text"
      onChange={this.handleInputChange}
      onPaste={this.handleInputChange}
      placeholder="https://github.com/:user/:repo/blob/:tag/:file"
      title="Paste a file URL from repository here!"
    />
  </div>
  <div className="mt-4 hidden">
    <div>
      <label className="font-bold" htmlFor="e:to">
        Use this URL in production:
      </label>
      <input
        className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-2 mx-auto shadow-lg focus:shadow-xl text-center"
        id="e:to"
        name="to"
        type="text"
      />
    </div>
  </div>
  <pre className="font-monospace text-sm text-left bg-gray-200 p-4 rounded mt-8 overflow-auto hidden"></pre>
</form>;
