﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/Products")]
    public class ProductsController : Controller
    {
    }
}