export class BaseController {
    model
    constructor(...args) {

    }

    async index (req, res, next) {
        return this.model.index(req.params);
    }

    async store (req, res, next) {
        return this.model.create(req.body);
    }

    async update (req, res, next) {
        return this.model.update(req.body.id, req.body);
    }

    async delete (req, res, next) {
        return this.model.delete(req.params.id);
    }
}